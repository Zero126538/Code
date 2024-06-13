import React, { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

interface b_t2_3Data {
  start_date: string;
  end_date: string;
  season: string;
  book_number: string;
  book_name: string;
  country: string;
  author1: string;
  author2: string;
  author3: string;
  book_limit: string;
  year: string;
  book_link: string;
  type: string;
  description: string;
}

function User2_3(): JSX.Element {

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [season, setSeason] = useState('');
  const [book_number, setBookNumber] = useState('');
  const [book_name, setBookName] = useState('');
  const [country, setCountry] = useState('');
  const [author1, setAuthor1] = useState('');
  const [author2, setAuthor2] = useState('');
  const [author3, setAuthor3] = useState('');
  const [book_limit, setBookLimit] = useState('');
  const [year, setYear] = useState('');
  const [book_link, setBookLink] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();

      const b_t2_3Data: b_t2_3Data = {
          start_date,
          end_date,
          season,
          book_number,
          book_name,
          country,
          author1,
          author2,
          author3,
          book_limit,
          year,
          book_link,
          type,
          description
      };

      try {
          const response = await axios.post('http://localhost:8002/User2_3', b_t2_3Data);
          console.log(response.data);

          // Clear the form fields after successful submission
          setStartDate('');
          setEndDate('');
          setSeason('');
          setBookNumber('');
          setBookName('');
          setCountry('');
          setAuthor1('');
          setAuthor2('');
          setAuthor3('');
          setBookLimit('');
          setYear('');
          setBookLink('');
          setType('');
          setDescription('');
          setShowModal(false); // Close the modal after submission
      } catch (error) {
          console.error('Error adding b_t2_3:', error);
      }
  };

  const [b_t2_3, setb_t2_3] = useState<b_t2_3Data[]>([]);

  useEffect(() => {
    axios.get<b_t2_3Data[]>('http://localhost:8002/User2_3')
      .then(res => setb_t2_3(res.data))
      .catch(err => console.log(err));
  }, []); // Adding an empty dependency array to run the effect only once on component mount

  return (
    <div>
    <div className="overflow-x-auto">
      <div className="p-3">
        <table className='min-w-full divide-y divide-gray-200'>
        <thead className="">
          <tr className="border-2 border-slate-400 h-10 relative">
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Эхэлсэн</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Дууссан</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Улирал</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Дугаар</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Өгүүллийн нэр</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Хаана</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Зохиолч1</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Зохиолч2</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Зохиолч3</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Тоо</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Хэвлэсэн он</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Холбоос</th>
            <th className="text-center border-r border-slate-400 pl-4 pr-4 whitespace-nowrap">Төрөл</th>
            <th className="text-center border-slate-400 pl-4 pr-4 whitespace-nowrap">Тайлбар</th>
          </tr>
        </thead>
        <tbody>
          {b_t2_3.map((data, i) => (
            <tr key={i} className="h-12 relative border-slate-400 border-b">
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.start_date}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.end_date}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.season}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.book_number}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.book_name}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.country}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.author1}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.author2}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.author3}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.book_limit}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.year}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.book_link}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.type}</td>
              <td className="text-center pl-4 pr-4 whitespace-nowrap">{data.description}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
    <div className="flex justify-center">
      <div>
      <div className="pt-2">
          <button onClick={() => setShowModal(true)} className="bg-green-500 pt-2 pb-2 pl-3 pr-3 rounded-full text-white">Нэмэх</button>
            <Modal
                title="Add Book"
                visible={showModal}
                onCancel={() => setShowModal(false)}
                footer={null} // Hide the default footer
            >
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="start_date">Start Date:</label>
                    <input
                        type="date"
                        id="start_date"
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="end_date">End Date:</label>
                    <input
                        type="date"
                        id="end_date"
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="season">Season:</label>
                    <select name="options" id="season" onChange={(e) => setSeason(e.target.value)}>
                        <option value="Намар">Намар</option>
                        <option value="Хавар">Хавар</option>
                        <option value="Бүгд">Бүгд</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="book_number">Book Number:</label>
                    <input
                        type="number"
                        id="book_number"
                        value={book_number}
                        onChange={(e) => setBookNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_name">Book Name:</label>
                    <input
                        type="text"
                        id="book_name"
                        value={book_name}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author1">Author 1:</label>
                    <input
                        type="text"
                        id="author1"
                        value={author1}
                        onChange={(e) => setAuthor1(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author2">Author 2:</label>
                    <input
                        type="text"
                        id="author2"
                        value={author2}
                        onChange={(e) => setAuthor2(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author3">Author 3:</label>
                    <input
                        type="text"
                        id="author3"
                        value={author3}
                        onChange={(e) => setAuthor3(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_limit">Book Limit:</label>
                    <input
                        type="number"
                        id="book_limit"
                        value={book_limit}
                        onChange={(e) => setBookLimit(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_link">Book Link:</label>
                    <input
                        type="text"
                        id="book_link"
                        value={book_link}
                        onChange={(e) => setBookLink(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                    <button type="submit">Submit</button>
                    <Link to="/">View Data</Link>
                </form>
            </Modal>
        </div>
      </div>
      <div className="pt-2 pl-2 pr-2">
          <button onClick={() => setShowModal(true)} className="bg-sky-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-white">Засах</button>
            <Modal
                title="Add Book"
                visible={showModal}
                onCancel={() => setShowModal(false)}
                footer={null} // Hide the default footer
            >
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="start_date">Start Date:</label>
                    <input
                        type="date"
                        id="start_date"
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="end_date">End Date:</label>
                    <input
                        type="date"
                        id="end_date"
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="season">Season:</label>
                    <select name="options" id="season" onChange={(e) => setSeason(e.target.value)}>
                        <option value="Намар">Намар</option>
                        <option value="Хавар">Хавар</option>
                        <option value="Бүгд">Бүгд</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="book_number">Book Number:</label>
                    <input
                        type="number"
                        id="book_number"
                        value={book_number}
                        onChange={(e) => setBookNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_name">Book Name:</label>
                    <input
                        type="text"
                        id="book_name"
                        value={book_name}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author1">Author 1:</label>
                    <input
                        type="text"
                        id="author1"
                        value={author1}
                        onChange={(e) => setAuthor1(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author2">Author 2:</label>
                    <input
                        type="text"
                        id="author2"
                        value={author2}
                        onChange={(e) => setAuthor2(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author3">Author 3:</label>
                    <input
                        type="text"
                        id="author3"
                        value={author3}
                        onChange={(e) => setAuthor3(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_limit">Book Limit:</label>
                    <input
                        type="number"
                        id="book_limit"
                        value={book_limit}
                        onChange={(e) => setBookLimit(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_link">Book Link:</label>
                    <input
                        type="text"
                        id="book_link"
                        value={book_link}
                        onChange={(e) => setBookLink(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                    <button type="submit">Submit</button>
                    <Link to="/">View Data</Link>
                </form>
            </Modal>
        </div>
        <div className="pt-2">
          <button onClick={() => setShowModal(true)} className="bg-red-500 pt-2 pb-2 pl-3 pr-3 rounded-full text-white">Устгах</button>
            <Modal
                title="Add Book"
                visible={showModal}
                onCancel={() => setShowModal(false)}
                footer={null} // Hide the default footer
            >
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="start_date">Start Date:</label>
                    <input
                        type="date"
                        id="start_date"
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="end_date">End Date:</label>
                    <input
                        type="date"
                        id="end_date"
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="season">Season:</label>
                    <select name="options" id="season" onChange={(e) => setSeason(e.target.value)}>
                        <option value="Намар">Намар</option>
                        <option value="Хавар">Хавар</option>
                        <option value="Бүгд">Бүгд</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="book_number">Book Number:</label>
                    <input
                        type="number"
                        id="book_number"
                        value={book_number}
                        onChange={(e) => setBookNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_name">Book Name:</label>
                    <input
                        type="text"
                        id="book_name"
                        value={book_name}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author1">Author 1:</label>
                    <input
                        type="text"
                        id="author1"
                        value={author1}
                        onChange={(e) => setAuthor1(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author2">Author 2:</label>
                    <input
                        type="text"
                        id="author2"
                        value={author2}
                        onChange={(e) => setAuthor2(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author3">Author 3:</label>
                    <input
                        type="text"
                        id="author3"
                        value={author3}
                        onChange={(e) => setAuthor3(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_limit">Book Limit:</label>
                    <input
                        type="number"
                        id="book_limit"
                        value={book_limit}
                        onChange={(e) => setBookLimit(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="book_link">Book Link:</label>
                    <input
                        type="text"
                        id="book_link"
                        value={book_link}
                        onChange={(e) => setBookLink(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='pt-3 flex'>
                    <button type="submit" className='bg-sky-500 rounded-full pl-3 pr-3 pt-1.5 pb-1.5 text-white'>Бүртгэх</button>
                    <Link to="/" className='pl-5 rounded-full border-slate-300 border-2 pr-5 pt-1.5 pb-1.5 flex ml-2'>Нүүр хуудас руу буцах</Link>
                </div>
                </form>
            </Modal>
        </div>
      </div>
    </div>
  );
}

export default User2_3;
