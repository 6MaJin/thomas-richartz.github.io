/** @jsxImportSource @emotion/react */

import { bottomBarStyle } from "../styles";

import { ReactComponent as HouseIcon } from '../assets/svg/house_icon.svg' 
import { ReactComponent as GalleryIcon } from '../assets/svg/gallery_icon.svg' 


interface BottomBarProps {
    onNavigate: (screen:string) => void;
    selectedScreen: string;
}

export const BottomBar = ({onNavigate, selectedScreen}:BottomBarProps): JSX.Element => {

    let parentScreen = "gallery";
    if (selectedScreen === "gallery") {
        parentScreen = "landing";
    }

    return <><div css={bottomBarStyle}>
        {/* <span css={{
            border: 0,
            color:'#666',
            background: 'none',
            boxShadow: 'none',
            borderRadius: '0px',
            fontSize: '1.2em',
            marginLeft: '1vw',
            '&:hover,&:focus' : {
                color:'#999',
            }
        }} > &copy; Thomas Richartz 2022</span> */}
        <button css={{
            border: 0,
            color:'#fff',
            background: 'none',
            boxShadow: 'none',
            borderRadius: '0px',
            alignSelf:'center',
            margin: 'auto',
            fontSize: '1.8em',
            // &#9650; &#8962;
        }}  onClick={() => onNavigate(parentScreen)}>{(
            (selectedScreen === "landing") && <GalleryIcon fill="#cde" stroke="#ecd" />) || <HouseIcon fill="#cde" stroke="#ecd" /> }</button>
    </div>
    </>

};

