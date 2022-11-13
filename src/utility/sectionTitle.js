export const sectionTitle = (data) => {
    const { title, subTitle, titleColor } = data;
    return <div>
        <h4 className="text-xl text-secondary font-bold">{subTitle}</h4>
        <h2 className={`text-4xl my-1 ${titleColor ? titleColor : "text-accent"}`}>{title}</h2>
    </div>
}