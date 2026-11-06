function Article({ title, date, preview }) {
    return (
        <div>
            <h3>{title}</h3>
            {date}
            <p>{preview}</p>
        </div>
    );

}
export default Article;