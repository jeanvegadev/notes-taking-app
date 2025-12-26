export interface Category {
    id: string;
    name: string;
    color: string;
}

export const CATEGORIES: Category[] = [
    { id: "random", name: "Random Thoughts", color: "#d89b7a" },
    { id: "personal", name: "Personal", color: "#7eb3b0" },
    { id: "school", name: "School", color: "#f0d89c" },
    { id: "drama", name: "Drama", color: "#a8c89c" },
];
