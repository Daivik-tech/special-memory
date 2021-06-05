var canvas=new fabric.canvas('mycanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_objects="";
function player_update(){
    fabric.img.fromURL("player.png",function(img){
    player_object= Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
         });
}
function new_images(get_image){
    fabric.img.fromURL(get_image,function(img){
    block_image_object=Img
    block_image_object.scaleToWidth(block_image_width)
    block_image_object.scaleToHeight(block_image_height)
    player_object.set({
        top:player_y,
        left:player_x
        }); 
        canvas.add(block_image_object);   
    });
}