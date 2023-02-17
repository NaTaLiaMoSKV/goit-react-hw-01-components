import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <>
        <h1>Task-1</h1>
        <Profile username={user.username} tag={user.tag} location={user.location}
          avatar={user.avatar} stats={user.stats} />
      </>
      <>
        <h1>Task-2</h1>
        {/* <Statistics stats={data} /> */}
        <Statistics title="Upload stats" stats={data} />
        
      </>
      <>
        <h1>Task-3</h1>
        <FriendList friends={friends} />
      </>
      <>
        <h1>Task-4</h1>
        <TransactionHistory items={transactions} />
      </>
      
    </div>
  );
};

export default App;