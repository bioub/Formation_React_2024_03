import { useEffect } from 'react';
import { useParams } from 'react-router-dom'


function Hello() {
    const params = useParams();

    useEffect(() => {
      //  fetch('fakeapi/' + params.name)
    }, [params.name])


  return (
    <div className="Hello">
      Hello {params.name}
    </div>
  );
}

export default Hello;
