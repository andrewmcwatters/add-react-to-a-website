'use strict';

const {
  useState
} = React;
const e = React.createElement;
function LikeButton() {
  const [liked, setLiked] = useState(false);
  if (liked) {
    return 'You liked this.';
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(true)
  }, "Like");
}
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));