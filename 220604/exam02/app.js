import { createHeader } from "./js/header.js";
import { createContent, loadImages } from "./js/content.js";
import { registerEventHandlers } from './js/eventHandlers.js';
// import { createMenu} from "./js/menu.js";
// createContent는 innerHTML을 통해 레이아웃을 통째로
// 변경하기 때문에 헤더 생성 함수보다 먼저 배치시킨다
createContent();

// 이미지 파일 로드하여 css에 반영
loadImages();

const root = document.getElementById('root');
const header = createHeader();
// const menu = createMunu();
root.appendChild(header);

// 이벤트 핸들러 반영
registerEventHandlers();
