fun main() {
    val T = readln().toInt()
    val result = mutableListOf<String>()
    for (t in 1..T) {
        val (R, S) = readln().split(" ")
        var repeatS = ""
        val splitS = S.split("")
        for (s in splitS) {
            repeatS += s.repeat(R.toInt())
        }
        result.add(repeatS)
    }
    println(result.joinToString("\n"))
}