r = require('rethinkdb')
var connection = null
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  connection=conn;
  r.table("user").run(connection,function (err,cursor) {
    if(err) throw err;
    cursor.toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      console.log(JSON.stringify(result, null, 2));
    });
  })
  //
  // r.db('test').tableCreate('tv_shows').run(conn, function(err, res) {
   // if(err) throw err;
 //   console.log(res);
   // r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(conn, function(err, res)
  //  {
   //   if(err) throw err;
     // console.log(res);
 //   });
 // });
});
