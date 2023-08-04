import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideNavbar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;
    return (
        <div className="cursor-pointer flex items-start flex-col gap-3 w-24 fixed bg-white mt-16 h-full shadow-lg">
            <Link to="/">
                <span className="flex flex-col items-center ml-6 justify-center">
                    <img
                        className=" m-0 p-0 h-5 w-6"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpbNK1lM-4oNrqVpc9cVrq8dx8wguBAYkK5TkUCkEI42jMijcFWx9GVgUBmNaxS1goyM&usqp=CAU"
                        alt="home-icon"
                    />
                    <h1 className="text-xs m-0 p-0">Home</h1>
                </span>
            </Link>

            <span className=" cursor-pointer flex ml-5 flex-col items-center justify-center">
                <img
                    className=" m-0 p-0 h-8 w-10"
                    src="data:image/png;base64,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"
                    alt="shorts-icon"
                />
                <h1 className="text-xs m-0 p-0">Shorts</h1>
            </span>

            <span className="cursor-pointer ml-1  flex flex-col items-center justify-center">
                <img
                    className=" m-0 p-0 h-8 w-6"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADPz89hYWHMzMz09PSWlpZTU1P6+vrt7e3X19f8/PxaWlokJCSgoKAyMjKJiYm4uLhGRkYZGRlxcXEqKiqvr6/g4OBmZmY6OjpKSkpAQEC1tbXn5+cRERFra2uDg4OamprAwMAfHx83NzeMNedaAAADZElEQVR4nO2di47aQAxF3QBLHhACFMJ2oY/t/v83dipUCYkumofH9oR7PiDxEcFMnMmFCAAAAAAAAAAAAE9NW8nSihsuv8iyFDecCRvOYAhDGMIQhjCEIQxhCEMYwhCGJg1XwoYrccPjiyxHcUMAAAAAAAAAAAAUyHE1s8eKc7DxIjx28uMFhjCEoTowhCEM9YEhDGGoDwxhCEN9YBhCvbBIzWgIAAAAAAAAAAA8A2M1t0k1MthVw0F7HPOQw1Cl6NX9WtvAg3UfPbDZluD3l/U5TvCkXXgApwi/ppQP8Mq6CRW8lCXoFC9hgvWrdsXBvIb1m5K+g/8I+i5utauNYhtwje61i41i73+d9tq1RtL7CnYb7VIj2XSehnPtSqPxXaMO2oVGM3ga7rQLjWbnJ1hr15mAXzdttMtMwG912mqXmYBffmSlXWYCfs0UhpaBIQztA0N2wzfptGFxwyXN3/iO5oGCIdFZcmqnYki14MhAx9A5/uQ75GO0DIkuX/kO+gg9Q3fHIhJhp2lINBcYcOkaEm2zz2G1Danrv/Md/H+oGxIt8g7yDBgSNT/4jn+HCUOiMd9q1Yiha6u5RrJmDF1bzdNyDBlmesBlyjBLW7VlmGO1as2Qv63aMyTmIYBFQ6Iz495Am4acQwCjhs6Rq62aNXSrVZ62atjQtVWOIYBpQ9dWP5JPaNzQrVZ/J57QvKFbraYNOgowTFytlmCY1lbLMHQr8ui2WorhGD3KKcNw6ldp2gLOvmHqIty8YfKNlHFDhpth04btN4YTGjYcJ373tOB6DG7V8BfbCW0aHvnOZ9LwfeLTRJYGeoM1wwv7nyjaMmwy7COyZFhnSSo0ZHic+BPS99SZ2mcYMayYG+gNJgzHnP9Ca8CQ6fnEZ6gbLnJHvSobZt/Vpm24FciB0TSsRF6f1jOU2SGsZyi1y1vtbQSxnfo6hp1oQIO44Yp1s4wH4oYf0q/24+08GNoHhjC0DwyvTD/5Y/rpLdNP4Jl+itITJGGV20x908ymn0g3/VRB6gpNhvT+CJ8g3fMJElqpLq/ZbAJTvRvbUez3HILDoJuyPsVNsKC7UEv6Lp7igufzx1gwsQ/qord0fQmX6qYP+B28d6wG23cau6FK8btSN21lk7bBH3UCAAAAAAAAAABPwx9rv3tO1WasogAAAABJRU5ErkJggg=="
                    alt="subscription-icon"
                />
                <h1 className="text-xs m-0 p-0">Subscriptions</h1>
            </span>
            <span className="cursor-pointer ml-5 flex flex-col items-center justify-center">
                <img
                    className=" m-0 p-0 h-7 w-6"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADPz89hYWGWlpalpaXDw8OLi4v8/Pzv7+/p6enT09PZ2dkiIiLy8vJMTExFRUXj4+NycnKvr6+FhYVYWFg6Ojqfn59RUVEKCgpaWlrAwMBCQkJISEg1NTVsbGwVFRUuLi6Pj48HnYJSAAAEGklEQVR4nO3di1raQBCG4QU5JBBCAdFWrVbv/yILta2Kq93DTOYf+n9X4PswEjanDYExxhhjjDHGGGPspabZLMdD17XNQLx2t12NbFrPl/rKbmuk+939VNfXGPuOrWaKwLG17rkHtVGdWtP+dNXrAK+tYS89qhB31qzXXSkMameNettWXnhnbTpJ/BsVakaPraSF1qD3CR/64T5C8S+br9aeSEtJ4MJaE2suKZxZa2KtJYUTa000yX9EgCVFpFZQeGGNidadvXBMIYUUmkchhRTaRyGFFNpH4RDCe1HRaQjC3eybqOltCMJpWHwXRb0JQxjCpajqdSjCoDapacJuf3HSzU5YGBZrUdjf0oSRC9cTaaHWpCIJdSYVShhahUnFEoYwr9LEQhPKX/yAE4b+SxXoXXhC6UlFFMpOKqQwtIKTiimUnFRUodykwgpDK3T3Ea5QalKRhTKTCi0UWftjCyUmFV1YP6nwwuq1P76wdlI9COsm1YUwLCruevQhrJlUL8LySXUjLD5L5UdYOqmehOH27IVFa39fwpIz/96E+ZPqThgWmWt/f8LcSfUozLtG5VIYFhnfqT6FOZPqVZg+qW6FyUd/v8LUSXUsnP04c2HqSsOrMP0MnFNhxorfpzBnLexRmHeO2KEwc/3kT5i7BvYmzPnN7VJYcNbUl7DkfKInYe75C3fCwvP6foSl12a8CPviu2ucCCuukfoQ1lzn9iBsq+6qcSCsvN8EX1j7FAa6sP5JGnChwDMm2EKJ54SQhTJPJQILb2WegsIVSj3JhiosWynFAhUW3VcSD1Mo+VwQolDyiRlIoeCEHsMTSj9jiSasWynFAhMqvD4TSyj/FDCWUOedA0BCpRe84gg1JvQYilDrrRgwQsVXEGMI9d5OgyF8Un0POIJQNwoppNA+Cimk0D4KKaTQPgr9C9P2KEkTPgz/5ye0ERRqrtTLS9srKE0IuCnZaLSSFIJtfvhc4haIacJgtQPwZ0XeBlwh1DqpW1PihlaJws3wgH+Vuk9nohDwiJi6Y1eqEO5DTN5qNVWItBvwr5I3zksWhv3wik9Kf+N8urB/HJzxcRmPG6ULkYjX6cAcYehRBjXxWJ8vBPm6ucvb2TFPGDb2x8WsDzBfeDA+Wf5GXef6CoSHut3lw+muGAO0nYxL9lYtEfqKQv9R6D8K/Ueh/yj0H4X+o9B/FPrvvxTuJ+bln435OMiru6MbQWFrjYl2IShsrDHRJIVBcc/l8kSFiFfoZYVLa00sUWGju8N7WaLCMLXmRJIVIt4NJCxUfEKwNGFh2FqD3iUtbK6sRadJC0OP9n0qLgw92KcoLwwN1v+igvDwjYp00FARHg79OKOqJDz8Rp2rvR0gr72W8FDTdmP78u4JYowxxhhjjDHG2Nn1E2sTe015x+DfAAAAAElFTkSuQmCC"
                    alt="library-icon"
                />
                <h1 className="text-xs m-0 p-0">Library</h1>
            </span>
        </div>
    );
};

export default SideNavbar;
