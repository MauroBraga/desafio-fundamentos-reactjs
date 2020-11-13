interface Parameters {
  data: Date;
}


const formatValue = ({data}:Parameters ): string => {


  console.log(data)

  //return `${da}/${mo}/${ye}`;

  return data+'';
}

export default formatValue;
