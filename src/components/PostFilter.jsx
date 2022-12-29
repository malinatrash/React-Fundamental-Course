import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySeleсt";

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по:"
                options={[
                    {value: 'title', name: "Названию"},
                    {value: 'body', name: "Описанию"},
                ]}
            />
        </div>
    );
};

export default PostFilter;
