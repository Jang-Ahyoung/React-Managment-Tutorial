// import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Coustomer";

const customers = [// 3명의 사용자를 배열 형태로 저장!
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김펭수',
    'birthday': '970610',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '장아영',
    'birthday': '990611',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김딱지',
    'birthday': '340122',
    'gender': '고양이',
    'job': '애완묘'
  }

]
function App() {
  return ( //3명 정보 출력 위해선 Customer 3번 들어가면 돼!
    <div>
      { // customers=배열 map 통해 각 원소를 c를 이용(한명의 고객을 c라고 불러)하여 순회하도록 한다!!
        customers.map(c => {
          return (
            <Customer
              key={c.id}  // map함수 사용하기 위해 key값 사용해야해!
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
