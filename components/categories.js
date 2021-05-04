export default function Categories({ categories }) {
  if (categories.length > 0) {
    return (
      <span className="ml-1">
        under
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <span key={index} className="ml-1">
              {category.category.name}
            </span>
          ))
        ) : (
          <span className="ml-1"></span>
        )}
      </span>
    );
  }
  return <span className="ml-1"></span>;
}
