

export default function Column({title, bgColor, color}) {
    return (
        <div className='column'>
            <div className="column-content">
                <h2 style={{backgroundColor: bgColor, color: color}}>{title}</h2>
            </div>
        </div>
    );
}
