-- Adds support to the "web2mpv" chrome extension
-- Only works after "ytb://" protocol has been added to the registry on Windows 


function checkURL()
    local url = mp.get_property("stream-open-filename")
    if url and url:find("^ytb://") then
        url = url:sub(7)
        mp.set_property("no-resume-playback", "true")
        mp.set_property("stream-open-filename", url)
        mp.msg.info("Loaded URL sent by \"web2mpv\"")
    end
end

mp.add_hook("on_load", 9, checkURL)
