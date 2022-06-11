// Help render a series of pages for each id 
// Tell NEXT how many pages needed to create
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ball => {
      return {
        params: { id: ball.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
//   Processing data and then return it for the template component
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ball: data }
    }
  }
  
//   The template component: Each page will have the same skeleton, which is the below component with the data inside it can change
  const Details = ({ ball }) => {
    return (
      <div>
        <h1>{ ball.name }</h1>
        <p>{ ball.email }</p>
        <p>{ ball.website }</p>
        <p>{ ball.address.city }</p>
      </div>
    );
  }
  
  export default Details;