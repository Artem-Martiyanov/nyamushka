import React from "react";

export function CardDescription({description}) {
    return (
        <p className="description__p">
            <span className="item__num">
                {description.replace(/[^0-9, ]/g,'')}
            </span>
            {description.replace(/[^А-Яа-яЁё, ]/g,'')}
        </p>
    );
}