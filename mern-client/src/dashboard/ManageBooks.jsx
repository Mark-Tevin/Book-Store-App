import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Book is deleted successfully");
        setAllBooks(allBooks.filter((book) => book._id !== id)); // Remove deleted book
      });
  };

  return(
      <div className="px-4 my-12">
          <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

          {/* book data table */}
          <Table className="lg:w-[1180px]">
              <Table.Head>
                  <Table.HeadCell>
                      SER. NO.
                  </Table.HeadCell>
                  <Table.HeadCell>
                      Book Title
                  </Table.HeadCell>
                  <Table.HeadCell>
                      Author
                  </Table.HeadCell>
                  <Table.HeadCell>
                      Category
                  </Table.HeadCell>
                  <Table.HeadCell>
                      Prices
                  </Table.HeadCell>
                  <Table.HeadCell>
                  <span>
                      Edit or Manage
                  </span>
                  </Table.HeadCell>
              </Table.Head>
              {
                  allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900 dark:text-white">
                          {index+1}
                      </Table.Cell>
                      <Table.Cell className="font-medium text-gray-900 dark:text-white">
                          {book.title}
                      </Table.Cell>
                      <Table.Cell>
                          {book.authors}
                      </Table.Cell>
                      <Table.Cell>
                          {book.category}
                      </Table.Cell>
                      <Table.Cell>
                          $20.00
                      </Table.Cell>
                      <Table.Cell>
                         <div className="flex flex-row">
                         <Link
                          className="mt-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                          to={`/sell/dashboard/edit-books/${book._id}`}
                          >
                           Edit
                          </Link>
                          <button onClick={() =>  handleDelete(book._id)} className="bg-red-600 px-2 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Remove</button>
                         </div>
                      </Table.Cell>
                      </Table.Row>
                  </Table.Body>)
              }
              </Table>
      </div>
  )
};

export default ManageBooks;
