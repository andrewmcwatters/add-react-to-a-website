'use strict';

const { useState } = React;

const e = React.createElement;

function LikeButton() {
  const [liked, setLiked] = useState(false);

  if (liked) {
    return 'You liked this.';
  }

  return (
    <button onClick={() => setLiked(true)}>
      Like
    </button>
  );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOMClient.createRoot(domContainer);
root.render(e(LikeButton));