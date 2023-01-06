import { useEffect, useState } from "react";
import useUpdateEffect from "react-use/lib/useUpdateEffect";
import { AppCard } from "../../components/AppCard/Index";
import { Filter } from "../../components/Filter/Index";
import { Header } from "../../components/Header/Index";
import { Loading } from "../../components/Loading/Index";
import { NoData } from "../../components/NoData/Index";
import ReactPaginate from "react-paginate";
import { filterCharacter } from "./services";

import "./scss/index.scss";
import { SvgIcon } from "../../components/SvgIcon/Index";

export default () => {
  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState<boolean>();
  const [characters, setCharacters] = useState<any>([]);
  const [filterOptions, setFilterOptions] = useState<{
    status: string;
    species: string;
    gender: string;
  }>();

  const handleFilterChange = (value) => {
    setFilterOptions(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e?.target?.value);
  };

  const handlePageChange = (value) => {
    setCurrentPage(() => value.selected + 1);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);

      const data = await filterCharacter(currentPage, {});
      if (data) {
        setCharacters(data);
        setPageCount(() => data?.info?.pages);
      }

      setLoading(false);
    })();
  }, []);

  useUpdateEffect(() => {
    (async () => {
      setLoading(true);
      const data = await filterCharacter(currentPage, {
        ...(search !== undefined && {
          name: search,
        }),
        ...(filterOptions?.status !== undefined && {
          status: filterOptions?.status,
        }),
        ...(filterOptions?.species !== undefined && {
          species: filterOptions?.species,
        }),
        ...(filterOptions?.gender !== undefined && {
          gender: filterOptions?.gender,
        }),
      });

      if (data) {
        setCharacters(data);
        setPageCount(() => data?.info?.pages);
      }

      setLoading(false);
    })();
  }, [filterOptions, search, currentPage]);

  return (
    <div className="characters">
      <Header>
        <input
          type="text"
          placeholder="Search for characters"
          className="form-control search"
          onChange={handleSearchChange}
        />
      </Header>

      <div className="container pt-xl pb-xl">
        <div className="row">
          <div className="col-lg-3 col-md-4 mb-lg mb-md-0">
            <Filter onChange={handleFilterChange} />
          </div>

          <div className="col-lg-9 col-md-8">
            {!loading ? (
              <>
                <div className="row">
                  {characters?.results?.length > 0 ? (
                    <>
                      {characters?.results?.map((item) => (
                        <div className="col-lg-4 col-sm-6 mb-lg" key={item?.id}>
                          <AppCard item={item} />
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <NoData />
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <Loading />
              </div>
            )}

            <div
              className={`pt-3 ${
                pageCount === 1 || characters?.results?.length == 0 || loading
                  ? "opacity-0"
                  : ""
              }`}
            >
              <ReactPaginate
                previousLabel={<SvgIcon name="chevron-left" />}
                nextLabel={<SvgIcon name="chevron-right" />}
                pageClassName="pagination-item"
                pageLinkClassName="pagination-previousLink"
                previousClassName="pagination-previous"
                previousLinkClassName="pagination-link"
                nextClassName="pagination-next"
                nextLinkClassName="pagination-nextLink"
                breakLabel={null}
                breakClassName="pagination-item"
                breakLinkClassName="pagination-link"
                pageCount={pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
