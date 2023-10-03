// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ContentTable } from '../components/ContentTable';
import { PeopleTable } from '../components/PeopleTable';
import styles from './app.module.css';

export function App() {
  return (
    <div>
      <ul>
        <li>People Table</li>
        <li>Content Table</li>
      </ul>

      <PeopleTable />

      <ContentTable />
    </div>
  );
}

export default App;
