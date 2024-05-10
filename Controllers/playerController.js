const {db} = require('../Config/supabase');

const playerController = {
    async getAllPlayers(req, res){
        const players = await db.from('playerStats').select('Player_Name');

        await res.status(200).json({
            message: `Got all players from db!`,
            data: players
        });
    },

    async getPlayerStats(req, res) {
        const name = req.body.playerName;
        const stats = await db.from('playerStats').select('*').ilike('Player_Name', `%${name}%`);
    
        await res.status(200).json({
            message: `Got ${name} stats from db!`,
            data: stats
        });
    }
    
}

module.exports = playerController;