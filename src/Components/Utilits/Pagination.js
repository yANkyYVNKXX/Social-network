import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsersThunk } from '../../Redux/UsersPage-Reducer';
import style from './Pagination.module.css'

let Pagination = (props) => {
    
    const portionSize = 10
    const MaxPagesLength = Math.ceil(props.TotalUsers/5)
    const [pages, updPages] = useState([])
    const [{startPage,endPage}, updPagesLength] = useState({startPage:1,endPage:portionSize})
    

    useEffect(()=>{
      let pagesUPD = []
      for (let i=startPage;i<=endPage;i++){
         pagesUPD.push(i)
     }
     updPages(pagesUPD)
    },[startPage,endPage])
    
    const Next = ()=>{
      if (endPage<MaxPagesLength)
      {
        updPagesLength({startPage:startPage+portionSize,
                     endPage:endPage+portionSize})
                    }
      }

    const Prev = ()=>{
      if (startPage>1){
      updPagesLength({startPage:startPage-portionSize,
                     endPage:endPage-portionSize})
    }}

    const onClickChangePage = (current) =>{
      props.getUsers(current, props.term)
    }
     
    return (
              <div>
                {(startPage!=1) && <button className={style.Prev} onClick={()=>Prev()}>Prev</button>}
                <span>{pages.filter(p => p<=MaxPagesLength)
                            .map(p => <button key={p} disabled={props.ButtonDisabled} onClick={()=>onClickChangePage(p)} 
              className={props.CurrentPage === p ? style.ActivePage:style.margin}>{p}</button>)}
                </span> 
                <span>
                 {(endPage <= MaxPagesLength) && <button onClick={()=>Next()}>Next</button>}
                </span>
              </div>
    )

    }

let MapStateToProps = (state)=>{
    return {
      TotalUsers:state.UsersPage.totalCount,
      CurrentPage:state.UsersPage.currentPage,
      ButtonDisabled:state.Utilits.ButtonDisabled,
    }
}

let MapDispatchToProps = (dispatch)=>{

  return {
    getUsers:(current, term)=> dispatch(getUsersThunk(current, term))
}
}
export default connect(MapStateToProps,MapDispatchToProps)(Pagination);
