import s from './Posts.module.css';
import { usePopup } from '../../Services/Service';
import { memo } from 'react';
import Popup from '../Popup/Popup';

const Posts = memo(() => {
  const { open, openPopup, getData } = usePopup();
  const data = getData('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      {open.open && <Popup id={open.id} />}
      <section className={s.posts}>
        {data.length > 0 &&
          data.map((el) => (
            <div className={s.container} key={el.id}>
              <h2>{el.title}</h2>
              <p>id: {el.id}</p>
              <button
                onClick={() => openPopup({ open: true, id: el.id })}
                className={s.btn}
              >
                Read info
              </button>
            </div>
          ))}
      </section>
    </>
  );
});

export default Posts;
