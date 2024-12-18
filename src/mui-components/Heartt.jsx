import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Heart = () => {
    return (
        <div>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
    );
};

export default Heart;
