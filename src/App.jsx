 import React from 'react';
import { Link } from 'react-router-dom';
import estilos from "./App.module.css"; // Asegúrate de importar el archivo CSS correctamente

function MensajeBienvenida({ usuario }) {
  if (usuario) {
    return <p>Bienvenido, {usuario.email}.</p>;
  }
  return null;
}

function App() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  return (
    <>
      <div className={estilos.body}>
        <div className={estilos.superior}>
          <h2 className={estilos.top}><Link to="/">Inicio</Link></h2>
          <h2 className={estilos.top}><Link to="/Cuenta">Cuenta</Link></h2>
          <h2 className={estilos.top}><Link to="/Easter">Easter</Link></h2>
        </div>

        <MensajeBienvenida usuario={usuario} />

        <h1>Juegos K</h1>

        <h2 className={estilos.etiqueta}>1 Jugador</h2>
        <div className={estilos.juego}>
          <a href="https://www.txori.com/dbdevolution">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU" alt="pikapika" />
          </a>
        </div>
        <br />

        <h2 className={estilos.etiqueta}>2 Jugadores</h2>
        <div className={estilos.juego}>
        
           <Link to="https://poki.com/es/g/last-warriors"><img src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f3c7261a2d4b643efa146655aee238ad.jfif" alt="pikapika" /></Link>
                    
        </div>
                  <Link to="./JuegoMemoria"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhYZGRgYGR4cHBocHBocGRwZHRgjHhwdHhocIS4lHB4rHx4cJzgmLDAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISGjQkISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQxNDQ0ND80NDQxNDQ0NDQ0ND80MTExPzQ/NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA6EAABAwEGAwYFBAEDBQEAAAABAAIRIQMEEjFBUQVhcSKBkaGx8AYywdHhQlJi8RMUcoIjkqKywgf/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAQABBQEBAQEAAAAAAAAAAQIRAxIhMUFRMiIT/9oADAMBAAIRAxEAPwD2ZCEIBCEIBCEIBCEIBCEIBIhU/EOMNaxzmtcRBAcYa0nKQSZLeYBCBL3Yuf2we00y2XENH8QBnImTSZoYWL43x4MMFoIFQGAFjzye4mRyiDumviD4ktMJhpZikTiJkaYGQGmkVh3osFfLw95lwtHcgDEc3QZPf9lm1qROvXGbQuLmy2RBAFYmQa0JFRIrCqLa9Pj9RHIkaawZ78imIrQTGpDaf8frKjWrHCSKEzll75eyhUgtxZGrefaFPTmmbQlpwmfdO9PcNu5eQ6YIpG4rr4U5hRb68lxOrvIDzVDlniOQ7yR7KfsWOdtHcR4qPdrvuM6QcgBU90x1Mpx96GQMDLafDTkFPfpfSXZXpzJwOPODhH5V7wn47trGAXMIbkSXTUzBhwxA9DvnVY+2thsANyY7gNUz/qRo2Ryy8SYTgt5e3cL/AP0NloW42gQZ7BDv0kHszj1ywnJbG58YZatxWYc8cgKcjiIgr5ls7c/pLWu2loPkVZ8L+JbzYvDmvLv4mJI1hwr4JynD6RsbfHoR1j6EweRT+Fef/C3xq28Nh78DwIJwgkxpgDa9R4arUC/OzbjeNwwtj/wOLu8CryyuZSDdV9jaYqucHgaNBGH/AHMNSeuugU9rwRIMjcKjtCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCFw90CUEe92jQ04iI55UznceW6xHxDxljXOxSYIwtdmezOJwAnIwAJ7qRZcf460DAwgkkBz5hgP6ROomsCpjaV5dx/iDC4gSdXVMudrJFXGdIECBupasiFfr261e5ziTiJrQZuJisyK6qO2zYI33gE+IHoo5vTjkwjnLgPsmXWxmKf8pcPOqzw1ynOtKwDPUgHumqiWlpMwYOx/CSyL3foBG7fsaKWOEvdUA00/vJOZGu21H4feiwkEUPfpB7+fTuavNicW8ASfMnvJ8lZM4LaisGNQn7twi0JLCDIj7ehnuU74dlU15fhYGilKnl+fqorLEmJETqZoOg8VqbT4beaxMVHWFWXjgVo2TEnxNUms/p2a/FS9rJxPNT/EGP8AuT9mwOiHsrSCR/6up4BK+xtGUId5x5JLu+CQKF1BOGJ0BMUnLVWXn6zZZ8F/urrOCWtI0c3IjYEfKfcLmxtWPkT4huL0+vkrO7YS2jey44Xsn5XTm2PlM+ukFVvEeHYXHCatz2jRwO2hG/itJwu+AXoWTw4uLY+V7SRB54TJaciO8ZL1jg/Fy5ocMTmvkgh7zGHMV1HfIgjIheF3K0IIJphjy7++PKFsPg3jT7J7rJzxgLg9pIkMeeyHwCCWEiDBMTBlSFesi3LjMH+UgFzTli7BBmNoMb0CmWAdM4w4TUtbDgf5tJM9QAfVQbjbm0YDDZb+0gOaOWeJulTBivKRY2hBn9Qo4OGFw7xRzcqaTnSmmVu3LOei7UeztpzDgdoJ8xI81IQCEIQCEJCUCoQhAIQhAIQhAIQhAIQhAIQkKBHGKrL/ABBxaAW0gNxBpMA6Bz/4z+nXWkxacVv7bNpLgY0H7joJ2mp+uS8q+IOLOe8ucfn2JoMmGNaUrnBOeQQeNcVc4mCXED5jo4ziIbvE1JzPMrMBmIy8gAZCZ8AMz5KVavnxmpE9TNNKBQb68Zf/AEO13bT4rDZ972xPaO0H7KRw/h731MhvNNcLuON1Q41yGX5W4uNwwiXkNG2v4WNa48R1xjnzUC6cPaymEdTAPmQp7bA/p9Wx5Kay0s2/K0dT+ElpbtOUeX1XHXn69GZx8NNszrTxn6oEAyM9yf6XL7eKVTTreokfaPos8KfsLZziR9B6mT4Bd2jD1PX7fZc3YU2n0U2ztmj78vU9ycClt7sXCrJ7x9lQcT4ODJwkHeCB4ytw+9NFOye7+6pi1tGOiWN8K+IWpePSa4vx5nYPc0kOzBAdzGWKN99VYteHGDGQ86T6eIV3xrhDHDEww6cnR4T9DKzbWOaYIIc05aFpzg6xn3cl3zrl5dZ4V15sg10fpNNo/IPvJS7lGNoLoGEw/wDaSZxTTLtT10XN6ZLiP3Q5s/u1HhPgmbs/ucJ8Zn1juIWmHp3wnxp7ew8kPBwujDDX4Z0AOB4DTlLTIikreWFuxwaIIxkw6aSGnnR2VNZ5ryTgNsHhrseFzhBccw9juySNZa3DGpM7Rv8Agt4/yMLHNh4L2PAJpEwRrGURJ+bKK6ZbK7HstPIT1hPqLcngsblTs0ykUp4KUqgQhCBCuQF2hAgSoQgEIQgEIQgEIQgEIQgEhSqDxG/NsmF7iBAoJqTFABFSgyPxxxRrGuDSBMS7c6V1A7RPTcBeU368Pe52gb82kvnLnU4ejdVb/FPGf9RbY4hrR2GuIOHRr3R8z3fNsMTYk1WYtLcyY610pmeZyhZrUBAqTnrlEbei54bcnWz6UGZP7R9/fNNXlpAgmpz5K24feW2dlnU1+nl9VjVsjrmS68ry72zbBmFgyzdm4pP9cXamM9VRsvrTV3cMh/fl6px9/ZEnXL9NNyAchyWZj9avV88SLgXoDVBvJ38FmLxxFhyoPGT0nP3JUYcQANHGeQ+g+ql6ZOq21lepFVy+90LtvRZZnFD13Uq1v2JgHuq53NjvncrZNtsTINJiozTF5vJ018gs7acYI1VZeeOuJgHx91SZtTW5GjvF8iTOfNRm3/UOWXffnGsg9HBdstzUE6U3/K6TpuOur58NU+/lzYih3Vfb3lhIBzFe1mO9VjbcxnXaZaem3d/TRvYpU05SFqY4Z/6cpV8NQBn/APX6T35HnCiGA47Gon9IIp3Zewm7xaYq1mojqNhouW2klpOfyu6xQ98eZXSMa9rXh1uWOkVnQ1BisEakEDvGq9K4beRjY6HCYmoNHR2g4Z9kmZ2bNQQvKLB0dx76LcfDnEWvaLJ5k4i5mWogjEaiumRk5RBrNeqWDxEuJBirgSGudGcZTG42EmJUuwtTmeXcJivgq2422JuRmtdDEmRFdKg1opLLKXAEAanKc9xrr49FWU43gTSo308dT0UgFMNuzRWJIyJzHTZPoFQhIgVCEIBCEIBCEIBCEIBcuMBdIQRLxeA0Uz0qAPE+q8++Ir+bQPcSIFDFG4KucC/5jQYnRFIbE5a/ithjD2Bxa0UdBiSYkAkHCACMtTsCD5n8W3pjX/42gizs2ARQAwAWsDZhoLsJOsBuZRWMvVrUk/Mcxl2jJ8gSd67hR7ARU/7uu3d73TkAmXdrOpOc+vQbqNebcE0EAV6nfoFmrDd7tIIJqYXN2xOHeY+qjSXHEcvM9ArDhdlOlOcRn5LOvTpmc1w9pbXUDrXRQ7V8mff5V9erribNAP4gCaT3qPcrAWT2vgEUNa1B1OiznXLWunZ6VEOxRgcXRtWI28VwWg5eGRVzxa6m0tDaCrXCsESKZZ5R6pixufZIwyTlUU78lq1mZqAxzhkrS4WL35yptnwjsgmQIzOvgrTg3DiXQBMazFPELlrUds9Oqa/XYNbvrsqAskrcccugyAj3ss1d7kSSAQDz++iudJrPlV/4IoanYVP4SB80APSitbzdYaGwARNZkOnOseqYud3wukxSaGua6yuNzUJrjqTzXVi4qVbWUkkLu7XY6DlUwJ71LpqZpm0+UIY7EdsjP+0z6T5qVbWeEFtQRpSh6zVRLUigGYHSp1+iZvKanCVdH1IJBpQz9CrK6XgtM5RUEZd/T6qiu9pBB5jLny2+6usFQ4aieuhHWCPBVh6n8J8ea4YHGCQT8utBNMwe1llAyiTuLuMQxCINRB8O4Lxf4WvoaW2bzLAZaf1CmE4TpIwmNga0Xq/DyRs8DMxLxTeO02N4IyqtRleWT5CdTdllGycVQJAlQgEIQgEIQgEIQgEIQgEIQgzfxBeP8dmP5PdFcyS4tA5kk98LxX4ntjjcwmTjdNMoJznLFNNoXqnxteSLeyA7Qsx/kLeYDo5QIxGaQ0ryriNhE2lrONznGDSph3hBH/iNVmrFQ2QMbvPXaBnp0oSodoC4yRQZNAz5uOniptreIZ8oL3ma5BswKan7lVpD3SSSYFNAN8IGvPmqsd4e108zv0VzwiIAIzJp1VNdmTJyV3wmylwrHfMZ/lct/wAuvS/tei54wCaQYAznnCh3644OUyY0jkr26MIBr39EWrNAes5nqfovL3V7u2Mg2yaTQHpH5V1wvhU1eIGysWsjSV1bWwgRSaLXfakzI7fZsIwgflSbhZYQQ0Cokyi71gAZZKTY2MYhq7XYK30s81nuI1cZ0VZa3ZuLaad6sOIthxM6mqrHvmUz6Ys8mr3dHMrEhRIByFTpBV9dHC0Ee9F1erAMFR4bfRXu48JxKzzro8ySBXTT89FODMDDg7bhVzXtAkRAwtkzHVWTHMABNZyKh8QcH1FI119wndadqhvDhoIO008VGvjBnlIn35Jy2dLnH3nVJa2Zc2mXlVd8+nl3/SNYOmu005f3B6yri5WgNm3kY8PwqtlmWyDQkeEkQpXDXyCO/wAafZdHP6urk+MTonA4Oy5VEiolsCV6z8P3kOaxriWkw1rwZa6QMDXgUktLTSAZ0NF4/cLYMeCQC0jC8aESQJ6fRei/CjHmwY0nE19mW64mFjiBWuJsu7hNIghGa9Ks3uycBXUZH7H3KkqFc3EiCNNTNZIInYEUPNTVUCSUq4KDtCQJUAhCEAhCEAhCEAuXOgSulVcYthhwEw01eRngFSB1iO8DVBhOOl9o51u49l7g0CtWYATTKMDwP+bt1gOO2pcaVDmNcd41HUmJ6QvQ+PkvYwOpiY1xaCYm0c55aTFGgA9ZGkBeZ3+2Lu1Mk1O1DMf93pyWaqHfey0TUgCdpLZIB2oT3qn/ANScROWg5Tt5q6vbZYGkiT3yYA75VHggwdzPX+lV8rSzaZjlM77p7h9qQ+J10XLQCwdwNa8kw6j5G6zqc54bzrjUrb3a3oFMLiQK1NffvdZW53sgK8udtPacTAr15Lxazw+jm8xIvVuGjOaKuutm+3eS0wxmZ3J0UXjF7JkigNIRduJf6eyewA4y7FPItH1BVk+pb5bK4FjRUgECPymjxVjZJMmsDPNYJvHnEw7I5H7p93EWxmt2a/Caz+pl/tS4k6FR7mR2gVCtb6DlkoQv8GiszWbvMWuPA8EGjvCdVNvl+Bb1Wet70XEHbLwTzbeknRW5+s905vC0u1riZB0yUO921YBpsm7S2gUNYUN5JUmWdaNvaSCeScbaYW9Tl6wnXN/6btzRV77SB0y6rvj0827/AKc3q0AcWtyBkz6eKsLk0B09R4Fn5VNYCXVrWTzV3d4AaNSTPeZW3OH7q0F+E6uA+/mV6v8AAluILCYwEloOdRHd8tQZNRpE+TWVrgc12z5Pl9l6JwGuJsjE4B1mQYeJDicLqYhmCM4OuSJXqt2bmebgOmIqQqXg16c9jYcC4CHNI1FDBERXMEEjvBNmHP1a3udPq0KofQkSoBCEIBCEIBCEIElKhCAVFxYNL4dMYJoJivaMmAMmyScmndTr1xOzZ2S6XftHzdTs3nksfxridm+0wY3PkgOZZuALjoxmEyBo57iIkxBogy/xRxJ2Fz3EVLoiQHFv/TYTNcsMDk46hYZ9G9qjoJjYST3H7K8+Ir1jtS0RDJhrflaahoA0a0Ck1qTmVnuICH4RvJ5mQB4NHmVGojXq1OJoGcCORzp0+iaLi+v6gYOnT3slcybQjqB1g08im39l50kYh0mn1KyfFhZtjnEgbTkT9O5R3HtAZwa9SnWPMUyjxP8AZXLIgnWfRWrEy7uwEewrO1vJgRrsqttqIEpTalxG2S81zbXrm5I6fbS4uMmMhpKU2RfE6+P4SPIa4c6xyynklt75gOFlNSR4wPLwXSYcddS0xb3KDoR3qHa2RGWXNTH8REYfM5/j+lHN4HU9F07WOTRBiENs9NU612vX34Lpjx8wI6HOffonC91R8Tmmq7ZbViM07bQa/wBhRHs1Clzys3YkknJcA1XLbY0lK58mixxWrqU7bPEYefoq+8680/bQSI8eqYtMtl0zOI46vNc3aldB5u0H17lYMmgmsHxKgsEkDKKwpVm75ncqDy+vkrSJoYHEj9wxd8198lsfh1mJoOMDtMZDvl+YRiOgiCHaFjuSxLMo6kevvkVoPhi+Q99m8Yg9mHKSHNq0jOorpUSFUeqcOsLaXDEZDsTflxjOcLsnxBGFxrUkiZWluFqXiXGXto4ZAHcDMTGskVG6zPDLUYocHhrwMLmuFY+U9gkSJiRu2ivrkcJd2n0/g6tBWje/qXKsrdCZs7QnQxuRh8jXyTyAQhCAQhCAQhCAVZxC9hkmsgEQCBPImKD+WnipF4tsMnYCJykzn3BV7bq5xaDkBjM/qedXD9IBiBsTkQgpOJ2drge5hLC75oJxOLqMbBBh7iRDcwDLycUHGcS4k6zY5lk44WBxcWlpa60JIJ7LBiBkMEnKaVhbb4mvDGUI7DAcTpbjdaOb8pOYAYXOcaDttG4XmfH70f8AEyBDrZziGQRhY0wCRk0EmAOTtJmVYomvwy45xirphgNnSS6p27yq+2dNp3g95Nft3Lq1tcRwgzq47xkBsBRN2LSXT+0RKlWOrYQ4v0Dh+SmbzZ4sLho4NOtCZHWs+Kfvxkw3ISD4JGiGAncf+sjzjyUWkuzhgnfyGfn9E2xwzOQyG6SwkCKEHzA9FyTO1PvlstB0iNe737opd2fFTnGe2/f9lBZ8xM96cNsKA+6LPB3Hv8mJ8zoTGwFB5KO5pc4jnPkioqB158vRd2O3qlXM59rK48Gsnjt2leVY6ru88DLJLHgxoaHzVe10VI8KIdf7Wey947yVjm/r0Ts49JFpwd/6nAdKxG/iod7uRZXE09E4+9Wrvme93UlMPbOhlObz7Z1M/ISxtDkdqHb3C6JgkHKJTBaYNc0hfSOq3HnpxzxOSMQgxnomXDLolA7wikdMDWFyTNEuGZXDc+n2WkP3dkS7YCOoE/RKx0GJpJB9KdPolblh1w+ZDh6jzTTzDj/F2W/9wUVLYTAO3lBUy7WkOa9hgtIMTEiO72FBuzpMdx6Vj6J0dl0zT0M0PREr2jhdrTHZtLmwHgYgC2MyIo4Ug9TUQVsrO9D5v8bxIGjeeswc15J8FcYJDWF4a5hOEO+WCRIDtN4NK6ZH07hN/dhDHNAc2mbiC2uEthpkYY8KqsrdtqT+kjqW/QlPJmzmJJqeUAdyeQCEIQCEIQCEIQVt9aQ9hAkE1BmpaCW1ANZJMfxGyatbZxc6uHJsTE0kVc0EGp+UO6KztGBwgiQqLjTsIe0UxMc8xSKBoBjOTHXKNwwfxBbgML3EOa1rixtQ19o+HOeQfmNTAyaG5TIHm99vT3fqLnkQT+1oEANGg/O5W1+JWYg90RhApnLnhrg0aBrRsP1HNYqwYKk9595c1FN3exiSdopmTy5BdMsxLRhMGpJPP7eqsrKxe6G2bJnN0QO7QRTdWNn8M25EuieRy7jE+KzrWZ7reca16ihfZ0iBLjmchXPwn2FBtX4jhHytMzudT4rbM+EXEdt5ro0ep/tT7v8AB9k3fvXO9bMdc9HX150LM6LlzY8/fkvR778Psa3sgLF3+4Fhw9Uz1JV30+FYKCuU92dUMEmSnXAQR/fRI5sEe6Z+nquzhxw4c7U1ApyJ5BPWLK1pRR3ty5R6J9z4Hflr7/CzYSu3uOQqgs390r6pLCM+9DnCpgGpgciI+gSZkW6tch4FPCPH0XTn0EFNPifcpuzfFfcpcyk1YHnM+KMIoUF8ukbeei4c4ZjdaR1A5IwEiQcvFBZsKa/QrlphE4IWCTXNIYnYkiR1J+gCXuXJHvopyvaexESdnV3HaOnf5Ju1bInUV6tBoR5BK4jETOeYr9JnL1S2ZGMCd42gmKFUd2ZOYpVs9cp9PNSLxWHDb8eqjM15xpsdk7ZklsDMepE+qCbwu/GyeHiYz2740Ocr1/4Y4iHkYhLXg4SIbiDTNWg4cbZ2ykrxJzHtAJmmv3Ww+COLua4M0xBw5OB05ESDyKSpY93sbACvaJ/kSY6VgdykJi6nsN6BPqshCEIBCEIBCEIElZ3iVg8veQ0kkANiuEYHiSAKSXOAOQknqIQYH4vuFo97mWTRLywuNA1uFgZziC2NTkovCvhGzs2zaRaPmajsDkG69TO8BIhebq7s9PV0cSzyvLK7AHL39lKDEiF569U8HW2S7dZwEiFRDvwkELI8TuoMmMvSaoQrCszeLm4mQMvVR7dkctuuf0QhejGq8nUzDD7Ix4+/JN4zI29/lIhdnB2LQ6aexRcttDMHaPfvVIhATMnIZ15ewjDv18hCEIrhzYFNcvfvJDWSfe3qhClDjBRGFIhYrcKWrgoQpGq5ImNCftmumtoDEQemRkCNyY8EIW3GnA6kxmR3URdXQY3PvvSoWiLaztJEGqm8IcLN7X4ZgyRlI5c0qFxlrt2zh7zwLidleLJr7J0gUI/U10VDhoVZoQu/x577KhCEAklCEH//2Q==" alt="pikapika" /></Link>
        <br />
      </div>
    </>
  );
}

export default App;
