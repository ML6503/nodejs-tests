export const getNodejsDocsSource = async() => {
  const res = await fetch('https://nodejs.org/api/documentation.json');
    if (res.ok) {
      const data = await res.json();
      
      return data.source;
    }   
};
