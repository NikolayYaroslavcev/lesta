import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div>
            Этой страницы не существует
            <div>
                <Link to={'/'}>На главную</Link>
            </div>
        </div>
    );
};

