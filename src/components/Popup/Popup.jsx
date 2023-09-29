import { memo } from 'react';
import { usePopup } from '../../Services/Service';
import s from './Popup.module.css';

const Popup = memo(({ id }) => {
  const { getDataById, closePopup } = usePopup();
  const data = getDataById(id);

  return (
    <>
      <section
        className={s.popup}
        onClick={() => {
          closePopup(false);
        }}
      >
        <div className={s.container} onClick={(e) => e.stopPropagation()}>
          <div className={s.block1}>
            <img
              className={s.close_icon}
              src="/closeIcon.svg"
              alt="closeIcon"
              onClick={() => {
                closePopup(false);
              }}
            />
          </div>
          <div className={s.block2}>
            <p className={s.text}>{data.body}</p>
            <p>id: {data.id}</p>
          </div>
        </div>
      </section>
    </>
  );
});

export default Popup;
