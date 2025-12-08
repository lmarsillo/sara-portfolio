import img_tool from '../../assets/icons/tools.svg';
import img_user_pet_cat from '../../assets/icons/wfh-user-pet-cat.svg';

import styles from './ToolsRoleBox.module.css';

const ToolsRoleBox = ({ type, description }) => {
  const boxProps =
    type === 'Tools'
      ? { image: img_tool, title: 'Tools' }
      : { image: img_user_pet_cat, title: 'Role' };

  return (
    <div className={styles.box}>
      <img src={boxProps.image} alt='' />
      <p>
        <span>{boxProps.title}:</span> {description}
      </p>
    </div>
  );
};

export default ToolsRoleBox;
