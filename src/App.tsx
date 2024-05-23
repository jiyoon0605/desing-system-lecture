import TagList from './components/TagList.tsx';

function App() {
  
  return (
    <div className={'w-screen h-screen bg-primary'}>
      <TagList tagList={['ALL', 'Typescript', 'Javascript']} onTagClick={console.log}/>
    </div>
  );
}

export default App;
