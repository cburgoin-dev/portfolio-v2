import "./SectionHeader.css";

type SectionHeaderProps = {
    label: string;
    title: string;
    description?: string;
};

function SectionHeader({
    label,
    title,
    description
}: SectionHeaderProps) {
    return (
        <div className="section-header">

            <span className="section-header-label">
                {label}
            </span>

            <h2 className="section-header-title">
                {title}
            </h2>

            {description && (
                <p className="section-header-description">
                    {description}
                </p>
            )}

        </div>
    );
}

export default SectionHeader;