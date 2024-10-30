import { getEmotionImage } from "../util/get-emotion-image";


const DiaryItem = () => {
    return (
        <div className="DiaryItem">
            <div className="img_section">
                <img src={getEmotionImage(1)}></img>
            </div>
            <div className="info_section"></div>
            <div className="button_section"></div>
        </div>
    );
};

export default DiaryItem;