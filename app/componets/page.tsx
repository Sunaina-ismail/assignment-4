export interface Tstudent{
  name:string,
  id:number,
  course:string,
  batch:string, 
  img:string
}


const Card = ({name,id, course,batch,img}:Tstudent) => {
  return (

    <div className="border border-gray-300 rounded-2xl bg-white shadow-2xl sm:w-[450px] transform hover:scale-105 transition-transform duration-300 sm:mx-4">
      <h1 className="flex items-center justify-center bg-blue-900 md:border-4 border-2 border-gray-200  sm:text-2xl text-md text-white font-bold rounded-t-2xl sm:py-3 py-2 px-2 sm:mb-3 mb-2">UNIVERSITY OF MANCHESTER</h1>
           <div className="flex sm:justify-around px-2 sm:py-5 pb-2">
            <div className="sm:h-44 h-28 sm:w-32 w-24 mr-2">
                <img className="h-24  sm:h-full w-full border-2 border-black" src={img} alt="student-img" />
            </div>
            <div className="flex sm:justify-center justify-around sm:mb-4 mb:2">
            <div className="flex flex-col sm:pr-5 sm:mr-5">
              <p className="font-semibold sm:mb-2 sm:text-lg text-sm">NAME:</p>
              <p className="font-semibold sm:mb-2 sm:text-lg text-sm">ID NO:</p>
              <p className="font-semibold sm:mb-2 sm:text-lg text-sm">COURSE:</p>
              <p className="font-semibold sm:mb-2 sm:text-lg text-sm">BATCH:</p>
              <p className="font-semibold sm:mb-2 sm:text-lg text-sm">SIGNATURE:</p>
              
            </div>

            <div className="flex flex-col text-right sm:pl-3">
              <p className="sm:mb-2 sm:text-lg text-sm">{name}</p>
              <p className="sm:mb-2 sm:text-lg text-sm">{id}</p>
              <p className="sm:mb-2 sm:text-lg text-sm">{course}</p>
              <p className="sm:mb-2 sm:text-lg text-sm">{batch}</p>
              <p className="sm:mb-2 sm:text-lg text-sm border-black border-b-2 font-cursive sm:pr-5 pr-3">{name}</p>
            </div>
          
            </div>
           </div>
           <div className="bg-blue-900 text-white flex items-center justify-center rounded-b-2xl">
           <span className="text-[10px] sm:text-lg"> STUDENT ID CARD</span>
            </div>
    </div>
    
  )
}

export default Card



