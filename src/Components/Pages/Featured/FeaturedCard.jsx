
import { PropTypes } from 'prop-types';

import { DataType, EditingMode, SortingMode, Table  } from 'ka-table';

const FeaturedCard = ({blog}) => {
    console.log(blog);
    const {title , image , category} = blog;

    const dataArray = 
       ({
          // column1: `row:${index}`,
          column2: `${blog.title}`,
          column3: `${image}`,
          column4: `${category}`,
          
      })
  
  
    return (
        <div>
            <div className='gap-x-5 bg-slate-200'>
            <Table 
            columns={[
                { key: 'column1', title: 'Column 1', dataType: DataType.String },
                { key: 'column2', title: 'Column 2', dataType: DataType.String },
                { key: 'column3', title: 'Column 3'},
                { key: 'column4', title: 'Column 4', dataType: DataType.String },
            ]}
            data={dataArray}
            editingMode={EditingMode.Cell}
            rowKeyField={'id'}
            sortingMode={SortingMode.Single}
            
        />
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    blog:PropTypes.object
}

export default FeaturedCard;