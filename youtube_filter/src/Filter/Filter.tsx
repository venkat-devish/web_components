import { ReactElement, useEffect, useState } from "react";
import { items } from "../data/items";
import "../styles/filter.scss";

type FilteredType = {
  name: String;
  category: string;
};

const Filter = (): ReactElement => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<FilteredType[]>(items);

  let filters: string[] = ["Bags", "Watches", "Sports", "Sunglasses"];

  const _handleClick = (selectedCat: string): void => {
    if (selectedFilters.includes(selectedCat)) {
      const tempItems = selectedFilters.filter(
        (item: string) => item !== selectedCat
      );
      setSelectedFilters(tempItems);
    } else {
      setSelectedFilters([...selectedFilters, selectedCat]);
    }
  };

  const getUpdatedTags = (): void => {
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.map((selectedCategory: string) => {
        return items.filter(
          (item: FilteredType) => item.category === selectedCategory
        );
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  useEffect(() => {
    getUpdatedTags();
  }, [selectedFilters]);

  return (
    <div className="filter">
      <div className="filter__buttons">
        {filters.map((item: string, idx: number) => {
          return (
            <button
              className={`filter__buttons--btn ${
                selectedFilters.includes(item) ? "active" : ""
              }`}
              onClick={() => _handleClick(item)}
              key={idx}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="filter__list">
        {filteredItems.map((item: FilteredType, idx: number) => {
          return <h1 key={idx}>{item.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default Filter;
