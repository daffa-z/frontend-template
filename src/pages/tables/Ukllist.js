import Layout from 'Layouts';

import Paper from '@mui/material/Paper'
import Link from 'next/link'
import ReactPaginate from "react-paginate"

import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import { useState, ChangeEvent } from 'react'


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: value => value.toFixed(2)
    }
  ]
  function createData(name, code, population, size) {
    const density = population / size
  
    return { name, code, population, size, density }
  }

  const searchData = (e) => {
    e.preventDefault();
  }

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767)
  ]
  
  const Ukllist = () => {
    // ** States
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [uklupl, setUklupl] = useState([]);
    const [limit] = useState(10);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage)
    }
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }
  
    /* return (
    <Layout title="table">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
  
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </Layout>
    ) */
    return(
    <Layout title="table">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className="container mt-5">
      <h1 className="title">UKL - UPL</h1>
      <div className="columns">
        <div className="column is-centered">
          <form onSubmit={searchData}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find something here..."
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-info">
                  Cari
                </button>
              </div>
            </div>
          </form>
          <h2 className="subtitle mt-2">Daftar UKL - UPL</h2>
          <Link href="/uklupl/add" className="button is-primary mb-2 mr-5">
            <a>
               Tambah Data
               </a>
            </Link>
          <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>{/* DELH DPLH */}
                <th>Nomor</th>
                <th>Status</th>
                <th>Judul</th>
                <th>Waktu Pelaksanaan Paparan</th>
                <th>Pemrakarsa / Pelaku Usaha</th>
                <th>Nama Konsultan</th>
                <th>Dokumentasi</th>{/* gambar */}
                <th>Berita Acara</th>{/* word */}
                <th>Keterangan</th>{/* pdf */}
                <th>Actions</th>
              </tr>
            </thead>
           {/*  <tbody>
              {uklupl.map((uklupl, index) => (
                <tr key={uklupl.id}>
                <td>{uklupl.nomor}</td>
                <td>{uklupl.status}</td>
                <td>{uklupl.judul}</td>
                <td>{uklupl.tanggalPelaksanaan}</td>
                <td>{uklupl.pemrakarsa}</td>
                <td>{uklupl.konsultan}</td>
                <td><a href={uklupl.url} >Download</a></td>
                <td><a href={uklupl.url2} >Download</a></td>
                <td>{uklupl.keterangan}</td>
                  <td>
                    <Link
                      to={`/uklupl/edit/${uklupl.id}`}
                      className="button is-small is-info"
                    >
                      Ubah
                    </Link>
                    <button
                      onClick={() => deleteUklupl(uklupl.id)}
                      className="button is-small is-danger"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
          <p>
            Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
          </p>
          <p className="has-text-centered has-text-danger">{msg}</p>
          <nav
            className="pagination is-centered"
            key={rows}
            role="navigation"
            aria-label="pagination"
          >
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.min(10, pages)}
              onPageChange={changePage}
              containerClassName={"pagination-list"}
              pageLinkClassName={"pagination-link"}
              previousLinkClassName={"pagination-previous"}
              nextLinkClassName={"pagination-next"}
              activeLinkClassName={"pagination-link is-current"}
              disabledLinkClassName={"pagination-link is-disabled"}
            />
          </nav>
        </div>
      </div>
    </div>
    </Paper> 
    </Layout>
    );
  }
  
  export default Ukllist
  