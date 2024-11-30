import { Select } from 'antd';
import './FilterSelect.css'


const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

const SelectFilter = () => {
    return (
        <Select
            showSearch
            placeholder="Фильтер"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={[
                {
                    value: 'Категория',
                    label: 'Категория',
                },
                {
                    value: 'Модель',
                    label: 'Модель',
                },
                {
                    value: 'Все',
                    label: 'Все',
                },
            ]}
        />
    );
};

export default SelectFilter;
