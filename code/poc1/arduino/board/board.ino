

const int numChars = 600;
char receivedChars[numChars];
boolean newCommand = false;
int receivedCount = 0;

int locations[5];
int sensors[5] = {0};

void setup()
{
  sensors[0] = 2;
  sensors[1] = 3;
  sensors[2] = 4;
  sensors[3] = 5;
  sensors[4] = 6;

  Serial.begin(9600);

  for (int i = 0; i < 5; i++)
  {
    pinMode(sensors[i], INPUT);
    locations[i] = digitalRead(sensors[i]);
  }

  Serial.println("Board init done");
  sendBoard();
}

void loop()
{

  receiveCommand();
  processCommand();

  boolean changed = false;
  for (int i = 0; i < 5; i++)
  {
    int temp = digitalRead(sensors[i]);

    if (locations[i] != temp)
    {

      Serial.print("sensor ");
      Serial.print(i);
      Serial.print(" changed from ");
      Serial.print(locations[i]);
      Serial.print(" to ");
      Serial.println(temp);
      locations[i] = temp;
      //changed = true;
    }
  }
  /*if (changed)
  {
    sendBoard();
    changed = false;
  }
  delay(100);*/
}

void sendBoard()
{
  Serial.print("[[");
  for (int i = 0; i < 5; i++)
  {
    Serial.print(locations[i]);
    if (i < 4)
    {
      Serial.print(";");
    }
  }

  Serial.println("]]");
}

void receiveCommand()
{
  static boolean recvInProgress = false;
  static int ndx = 0;
  char startMarker = '<';
  char endMarker = '>';
  char rc;

  while (Serial.available() > 0 && newCommand == false)
  {
    rc = Serial.read();

    if (recvInProgress == true)
    {
      if (rc != endMarker)
      {
        receivedChars[ndx] = rc;
        ndx++;
        if (ndx >= numChars)
        {
          ndx = numChars - 1;
        }
      }
      else if (rc == endMarker)
      {
        receivedChars[ndx] = '\0'; // terminate the string
        recvInProgress = false;
        receivedCount = ndx;
        ndx = 0;
        newCommand = true;
      }
    }

    else if (rc == startMarker)
    {
      recvInProgress = true;
    }
  }
}

void processCommand()
{
  if (newCommand == true)
  {
    Serial.print("This just in ... ");
    Serial.print(receivedCount);
    Serial.print(": ");
    Serial.println(receivedChars);

    char cmd = receivedChars[0];

    //----------------------------------------
    // VALID INCOMING CMDS

    // SLxxy - S(et) L(ed) XX (00-23) Y (0 or 1)
    // SAx - S(et) A(nimation) X (0 or 1 or 2)
    // CL - Clear board
    // S(et) B(oard) XXXXX....  (24 0's or 1's)

    //-----------------------------------------------
    if (receivedChars[0] == 'S') // Set value on or off
    {
      //char state_object = receivedChars[1];
      uint8_t state_object_value = receivedChars[2] - '0';

      if (receivedChars[1] == 'L')
      {
      }
      if (receivedChars[1] == 'A')
      {
      }

      if (receivedChars[1] == 'B')
      {
      }
    }

    newCommand = false;
  }
}
