const {db} = require('../Config/supabase');

const teamController = {
    async getTeamStats(req,res){
        const clubName = req.body.clubName;
        
        const stats = await db.from('playerStats').select('*').eq('Club', `${clubName}`);

        await res.status(200).json({
            message: `Got ${req.body.clubName} squad stats!`,
            stats: stats
        });
    }
}

module.exports = teamController;