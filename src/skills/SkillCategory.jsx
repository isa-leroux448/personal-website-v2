import './styles.css';

const SkillCategory = ({ title, skills }) => {
    const needTooltip = (skill) => !["Node", "Express", "Webflow", "Jira", "Asana", "ArcGIS"].includes(skill.tooltip);
    return (
    <div className="grid-container">
        <p className="grid-title">{title}</p>
        {skills.map((skill) => (
            <div className="grid-item">
                <img
                    src={skill.logo}
                    alt={skill.tooltip}
                    data-tooltip-id={needTooltip(skill) && "tooltip"}
                    data-tooltip-content={skill.tooltip}
                    data-tooltip-place="bottom"
                    style={{
                        maxWidth: skill.tooltip === "Figma" ? '40%' : skill.tooltip === "CSS" ? '36%' : '50%',
                      }}   
                />
            </div>
        ))}
        {title !== "Other" && <div className="black-line"/>}
    </div>
)};

export default SkillCategory;