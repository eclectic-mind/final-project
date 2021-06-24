import React from 'react';
import PageLink from '../page-link';
import { makeClassList, makeArrayFromValue, isPageInList } from '../../utils';

const makeLinksMarkup = (array, chosen) => {
  const len = array.length;
  return array.map((item) => {
    const allClassNames = makeClassList(item, chosen);
    return <PageLink 
      classNames={allClassNames} 
      pageTitle={item} 
      url='#' 
      quantity={len} 
      key={item} />;
  });
};

const Pagination = (props) => {

  const quantity = props.data.length;
  const len = Math.ceil(quantity / 12);

  if (len < 2) {
    return (
      <div className='pagination'></div>
    );

  } else {
 
    const arr = makeArrayFromValue(len);
    const correctPage = isPageInList(props.chosenPage, len);
    const linksMarkup = makeLinksMarkup(arr, correctPage);

    return (
      <div className='pagination'>
        <PageLink 
          classNames='to-start' 
          pageTitle='Начало' 
          url='#' 
          quantity={len} />
        {linksMarkup}
        <PageLink 
          classNames='to-end' 
          pageTitle='Конец' 
          url='#' 
          quantity={len} />
      </div>
    );
    
  }

};

export default Pagination;