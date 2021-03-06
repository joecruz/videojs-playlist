module("_V_.PlaylistThumb#sources()");

test('returns all video sources', function() {
  var subject = mkThumb();
  equal(subject.sources().length, 2)
});

test("source is a valid js object", function() {
  var subject = mkThumb();
  var vidSource = subject.sources()[0];
  equal(vidSource.src,"src1.mp4");
  equal(vidSource.type,"video/mp4");
  equal(vidSource.media,"");
  equal(vidSource.title,"");
});

test('returns poster for video', function() {
  var subject = mkThumb();
  equal(subject.poster(), "poster1")
});
