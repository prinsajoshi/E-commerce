import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div> {/* Corrected class name */}
        <div className="descriptionbox-nav-box fade">Reviews(122)</div> {/* Corrected class name */}
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum nobis laudantium nam consequuntur repellendus quam. Ullam quod saepe ducimus veritatis at alias, blanditiis necessitatibus, tempore sunt facere, aliquid dolores. Dolore aspernatur voluptatibus, suscipit labore vel unde, commodi quaerat non facilis inventore, aperiam voluptatem error eius nihil sint deleniti. Temporibus repellendus amet quidem explicabo illo quas odit. Voluptates, architecto tenetur. Dicta eveniet reiciendis veritatis id odit voluptatum quia similique dolores dolor iusto est, eius quaerat corporis culpa maiores illum magnam vitae. Dolores minus accusamus quo deserunt necessitatibus nostrum incidunt aliquam.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, incidunt. Explicabo earum unde deserunt iste qui incidunt delectus corporis. Perferendis esse facere tenetur reiciendis odit, dicta sequi minus maxime sapiente. Necessitatibus vero ad placeat quibusdam harum est quasi maiores delectus, dolorum iure doloremque hic aliquam deleniti provident ab, consequuntur non dolore reiciendis! Quasi tempora tempore incidunt vel hic accusantium sunt.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
