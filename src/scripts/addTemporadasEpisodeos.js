const database = require('../services/database');
const Filme = require('../models/filme');
const Episodeo = require('../models/Episodeo');
const Temporada = require('../models/Temporada');

const addTemporadasEpisodeos = async () => {
    try {
        const series = await Filme.find({ tipo: 'serie' }).select('_id');
        for (let serie of series) {
            console.log(`FILME ${serie}------`);
            const numTemporadas = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= numTemporadas; i++) {
                console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${1}`
                }).save();

                const numEpisodeos = Math.floor(Math.random() * 5) + 1;
                for (let x = 1; x <= numEpisodeos; x++) {
                    console.log(`Inserindo episodeo ${x} de ${numEpisodeos}`);
                    await new Episodeo({
                        temporada_id: temporada._id,
                        titulo: `Episódeo ${x}`,
                        numero: x,
                        descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                        capa: 'https://picsum.photos/300/200',
                    }).save();
                }
            }
        }
        console.log('FINAL DO SCRIPT');
    } catch (err) {
        console.log(err.message);
    }
}

addTemporadasEpisodeos();