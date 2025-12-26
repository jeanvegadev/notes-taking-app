"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import NoteDetail from "../components/NoteDetail";
import CategoryDropdown from "../components/CategoryDropdown";
import { CATEGORIES } from "../lib/categories";
import { getNoteById, saveNote } from "../lib/notesService";
import styles from "../newnote/newnote.module.css"; // Reuse styles from newnote

interface Note {
    id: string;
    title: string;
    content: string;
    category: string;
    categoryColor: string;
    createdAt: string;
    updatedAt: string;
}

export default function EditNotePage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [note, setNote] = useState<Note | null>(null);
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
    const [loading, setLoading] = useState(true);

    // Unwrap params using React.use()
    const { id } = use(params);

    useEffect(() => {
        if (id) {
            const foundNote = getNoteById(id);
            if (foundNote) {
                setNote(foundNote);
                const category = CATEGORIES.find(c => c.name === foundNote.category);
                if (category) {
                    setSelectedCategory(category);
                }
            } else {
                // Handle not found - maybe redirect back to notes
                router.push("/notes");
            }
            setLoading(false);
        }
    }, [id, router]);

    const handleAutoSave = (data: { title: string; content: string; category: string }) => {
        if (!note) return;

        saveNote({
            ...note,
            title: data.title,
            content: data.content,
            category: selectedCategory.name,
            categoryColor: selectedCategory.color,
            updatedAt: new Date().toISOString(),
        });

        console.log("Auto-saving update:", { id: note.id, ...data });
    };

    const handleClose = () => {
        router.back();
    };

    // Update selected category when dropdown changes
    const handleCategorySelect = (category: typeof CATEGORIES[0]) => {
        setSelectedCategory(category);
        // Trigger auto-save immediately for category change if needed, 
        // or let the next auto-save handle it (NoteDetail handles auto-save trigger)
    };

    if (loading) {
        return <div className="p-10">Loading...</div>;
    }

    if (!note) {
        return null; // or redirecting
    }

    return (
        <div className={styles.pageContainer}>
            {/* Header with Category Dropdown and Close Button */}
            <div className={styles.header}>
                <div className={styles.categoryDropdownContainer}>
                    <CategoryDropdown
                        selected={selectedCategory}
                        onCategorySelect={handleCategorySelect}
                    />
                </div>

                <button
                    className={styles.closeBtn}
                    onClick={handleClose}
                >
                    ✕
                </button>
            </div>

            {/* Note Detail Content */}
            <div className={styles.contentWrapper}>
                <NoteDetail
                    note={note}
                    selectedCategory={selectedCategory}
                    onAutoSave={handleAutoSave}
                    onClose={handleClose}
                />
            </div>
        </div>
    );
}
