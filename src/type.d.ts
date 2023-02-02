interface IData {
    date: string
    oil: string
    liquid: string
  }
  
  type DataState = {
    data: IData[]
  }
  
  type DataAction = {
    type: string
    article: IData
  }
  
  type DispatchType = (args: DataAction) => DataAction