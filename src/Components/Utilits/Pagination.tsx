import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { UrlUpdateType } from 'use-query-params';
import { AppState } from '../../Redux/Store';
import { getUsersThunk } from '../../Redux/UsersPage-Reducer';
import style from './Pagination.module.css'

type ownPropsType = {
  term:string | null | undefined
  startPage: number
  endPage:number
  updPagesLength: Dispatch<SetStateAction<{ startPage: number; endPage: number; }>>
  portionSize:number
  updCurrent: any
}
type MapStateToPropsType = {
  TotalUsers:number
  CurrentPage:number | undefined | null 
  ButtonDisabled:boolean
}

type MapDispatchToPropsType = {
  getUsers: (current:number,term:string | null | undefined)=> void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & ownPropsType

const Pagination: FC<PropsType>= ({TotalUsers, startPage, endPage, updPagesLength, 
                                  portionSize, term, CurrentPage, getUsers, ButtonDisabled, updCurrent}) => {
    
    
    const MaxPagesLength = Math.ceil(TotalUsers/8)
    const [pages, updPages] = useState<Array<number>>([])
    
    
    useEffect(()=>{
      let pagesUPD = [] as Array<number>
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

    const onClickChangePage = (current:number) =>{
      getUsers(current, term)
      updCurrent(current)
    }
     

    return (
              <div>
                {(startPage!=1) && <button className={style.Prev} onClick={()=>Prev()}>Prev</button>}
                <span>{pages.filter(p => p<=MaxPagesLength)
                            .map((p,i,arr) => arr.length>1 && <button key={p} disabled={ButtonDisabled} onClick={()=>onClickChangePage(p)} 
              className={CurrentPage === p ? style.ActivePage:style.margin}>{p}</button>)}
                </span> 
                <span>
                 {(endPage <= MaxPagesLength) && <button onClick={()=>Next()}>Next</button>}
                </span>
              </div>
    )

    }




let MapStateToProps = (state:AppState):MapStateToPropsType=>{
    return {
      TotalUsers:state.UsersPage.totalCount,
      CurrentPage:state.UsersPage.currentPage,
      ButtonDisabled:state.Utilits.ButtonDisabled,
    }
}

let MapDispatchToProps = (dispatch:Dispatch<any>):MapDispatchToPropsType=>{

  return {
    getUsers:(current:number, term:string | null | undefined)=> dispatch(getUsersThunk(current, term))
}
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, ownPropsType, AppState>(MapStateToProps,MapDispatchToProps)(Pagination);
