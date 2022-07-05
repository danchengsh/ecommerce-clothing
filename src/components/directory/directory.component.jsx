import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

//another way of doing this is using a Class Component cos we wanna store the state value of those menu items that we wanna display.
const Directory = ({ categories }) => {          
    return (
        <div className="directory-menu">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;
