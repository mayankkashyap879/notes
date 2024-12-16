interface SubSectionProps {
    title: string;
    children: React.ReactNode;
}

export const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
    return (
        <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <div className="ml-4 text-gray-600 dark:text-gray-300">
                {children}
            </div>
        </div>
    );
};